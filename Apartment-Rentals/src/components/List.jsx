import { useState } from "react";
import { ListItem } from "./ListItem";

const Preview = ({ listings }) => {
  const [data, setData] = useState(listings);

  console.log(data);
  return (
    <div className="list">
      {data.map((item) => (
        <ListItem item={item} data={data} setData={setData} key={item.id} />
      ))}
    </div>
  );
};

export default Preview;
