import { Card, Row, Col, Input, Typography, Space } from 'antd';
import {
  WiThunderstorm,
  WiSleet,
  WiRain,
  WiSnow,
  WiFog,
  WiDaySunny,
  WiDayFog,
} from 'weather-icons-react';

import useSearch from './hooks/useSearch';

import 'antd/dist/antd.css';
import './App.css';

const getIconByRangeId = (rangeId: number) => {
  if (rangeId >= 200 && rangeId <= 232) {
    return <WiThunderstorm />;
  } else if (rangeId >= 300 && rangeId <= 321) {
    return <WiSleet />;
  } else if (rangeId >= 500 && rangeId <= 531) {
    return <WiRain />;
  } else if (rangeId >= 600 && rangeId <= 622) {
    return <WiSnow />;
  } else if (rangeId >= 701 && rangeId <= 781) {
    return <WiFog />;
  } else if (rangeId === 800) {
    return <WiDaySunny />;
  } else if (rangeId >= 801 && rangeId <= 804) {
    return <WiDayFog />;
  }
};

const App = () => {
  const { items, handleSearch } = useSearch();

  return (
    <>
      <Input.Search onSearch={handleSearch} placeholder="Suche..." style={{ width: '15%' }} />
      {items.length > 0 ? (
        <Row wrap={false} align="middle">
          {items.map((item) => (
            <Card>
              <Space direction="vertical">
                <Typography.Title>{item.name}</Typography.Title>
                <Typography.Title>{item.date}</Typography.Title>
                <Col flex="30%">{`${item.temp} °C`} </Col>
                <Col flex="auto">{getIconByRangeId(item.rangeId)}</Col>
              </Space>
            </Card>
          ))}
        </Row>
      ) : (
        <Row>Keine Daten</Row>
      )}
    </>
  );
};

export default App;
