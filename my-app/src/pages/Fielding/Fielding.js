import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Pagination } from "antd";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const columns = [
  {
    title: "Overs",
    dataIndex: "Overs",
  },
  {
    title: "Mdns",
    dataIndex: "Mdns",
  },
  {
    title: "Runs",
    dataIndex: "Runs",
    sorter: true
  },
  {
    title: "Wkts",
    dataIndex: "Wkts",
  },
  {
    title: "Econ",
    dataIndex: "Econ",
    sorter: true
  },
  {
    title: "Pos",
    dataIndex: "Pos",
  },
  {
    title: "Inns",
    dataIndex: "Inns",
  },
  {
    title: "Dismisal Made",
    dataIndex: "Dismisal Made",
    sorter: true,
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Catch Taken",
    dataIndex: "Catch Taken",

    defaultSortOrder: "descend",
    sorter: true,
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Opposition",
    dataIndex: "Opposition",
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Ground",
    dataIndex: "Ground",
    render: (text) => <p className="column">{text}</p>,
  },

  {
    title: "Start DateAscending",
    dataIndex: "Start DateAscending",

    render: (text) => <p className="column">{moment(text).format("DD MMM YYYY")}</p>,

    defaultSortOrder: "descend",
    sorter: true,
  },
  {
    title: "Match Number",
    dataIndex: "Match Number",
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Result",
    dataIndex: "Result",

    filters: [
      {
        text: "Loss",
        value: "Loss",
      },
      {
        text: "Drawn",
        value: "Drawn",
      },
      {
        text: "Won",
        value: "Won",
      },
    ],
    
    render: (text) => (
      <p style={{ color: text === "Won" ? "blue" : "red", textAlign:"center" }}>{text}</p>
    ),
  },
];

const Fielding = () => {
  const [loading, setLoading] = useState(true);
  const [fieldingData, setfieldingData] = useState([]);
  const [total, settotal] = useState(0);
  const [page, setPage] = useState(0);
  const [sortby, setsortby] = useState();
  const [sortorder, setsortorder] = useState();
  const [filterBy, setfilterBy] = useState(['Loss', 'Drawn', 'Won']);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:4000/fetch?type=fielding&page=${page}&size=20&sortby=${sortby}&sortorder=${sortorder}&filterBy=${encodeURIComponent(JSON.stringify(filterBy))}`
      )
      .then((res) => {
        // console.log("hagd", res.data);
        setfieldingData(
          res.data.records.map((i) => ({
            ...i,
            Econ: +i.Econ,
          }))
        );
        settotal(res.data.total);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, sortby, sortorder, filterBy]);

  const onPaginationChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const onTableChange = (pagination, filters, sorter, extra) => {
    console.log("filters", filters);
    const { field, order } = sorter;
    const { Result } = filters;
    setsortby(field);
    setsortorder(order);
    if (Result) {
      setfilterBy(Result);
    }
  };
  console.log(filterBy);

  return (
    <div
      style={{
        width: "100vw",
        height: "200vh",
        paddingTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Fielding Stats..</h1>
      <div style={{ padding: "0px 30px" }}>
        <Table
          columns={columns}
          dataSource={fieldingData}
          loading={loading}
          pagination={false}
          onChange={onTableChange}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      <Pagination
        defaultCurrent={page}
        total={total}
        showSizeChanger={false}
        onChange={onPaginationChange}
        pageSize={20}
      />
      </div>
      {fieldingData.length > 0 && (
        <>
          <h1 style={{ textAlign: "center" }}> Fielding Bar Chart</h1>
          <ResponsiveContainer width="100%" height="50%">
            <BarChart
              width={500}
              height={300}
              data={fieldingData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="Opposition" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Econ" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default Fielding;
