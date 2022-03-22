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
    title: "Batting Score",
    dataIndex: "batting_score",

    sorter: true,
  },
  {
    title: "Wickets",
    dataIndex: "wickets",
    sorter: true,
  },
  {
    title: "Runs Conceded",
    dataIndex: "runs_conceded",
  },
  {
    title: "Catches",
    dataIndex: "catches",
    sorter: true,
  },
  {
    title: "Stumps",
    dataIndex: "stumps",
  },
  {
    title: "Opposition",
    dataIndex: "opposition",
    sorter: true,
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Ground",
    dataIndex: "ground",
    render: (text) => <p className="column">{text}</p>,
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 120,
    render: (text) => <p>{moment(text).format("DD MMM YYYY")}</p>,

    defaultSortOrder: "descend",
    sorter: true,
  },
  {
    title: "Match_Result",
    dataIndex: "match_result",

    filters: [
      {
        text: "lost",
        value: "lost",
      },
      {
        text: "tied",
        value: "tied",
      },
      {
        text: "won",
        value: "won",
      },
      {
        text: "n/r",
        value: "n/r",
      },
    ],

    render: (text) => (
      <p className="column" style={{ color: text === "won" ? "green" : "red" }}>{text}</p>
    ),
  },
  {
    title: "Result_Margin",
    dataIndex: "result_margin",
    render: (text) => (
      <p className="column">{text}</p>
    )
  },
  {
    title: "Toss",
    dataIndex: "toss",
    render: (text) => (
      <p className="column">{text}</p>
    )
  },
  {
    title: "Batting_Innings",
    dataIndex: "batting_innings",
    render: (text) => (
      <p className="column">{text}</p>
    )
  },
];

const Odi = () => {
  const [loading, setLoading] = useState(true);
  const [odiData, setodiData] = useState([]);
  const [total, settotal] = useState(0);
  const [page, setPage] = useState(0);
  const [sortby, setsortby] = useState();
  const [sortorder, setsortorder] = useState();
  const [filterBy, setfilterBy] = useState(["lost", "tied", "won", "n/r"]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:4000/fetch?type=odi&page=${page}&size=20&sortby=${sortby}&sortorder=${sortorder}&filterBy=${encodeURIComponent(
          JSON.stringify(filterBy)
        )}`
      )
      .then((res) => {
        // console.log("hagd", res.data);
        setodiData(res.data.records);
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
    setsortby(field);
    setsortorder(order);
    const { match_result } = filters;
    if (match_result) {
      setfilterBy(match_result);
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
      <h1 style={{ textAlign: "center" }}>ODI Stats..</h1>
      <div style={{ padding: "0px 30px" }}>
        <Table
          columns={columns}
          dataSource={odiData}
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
      {odiData.length > 0 && (
        <>
          <h1 style={{ textAlign: "center" }}> ODIs Bar Chart</h1>
          <ResponsiveContainer width="100%" height="50%">
            <BarChart
              width={500}
              height={300}
              data={odiData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="opposition" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="wickets" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default Odi;
