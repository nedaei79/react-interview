import Left from "./left";
import Right from "./right";

export default function ContactUs() {
  // lert("welcome!");

  return (
    <div>
      contact us
      <button onClick={() => {}}>validate</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "red",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "lightblue",
            height: "100vw",
          }}
        >
          <Left />
        </div>
        <div style={{ width: "50%", backgroundColor: "lightpink" }}>
          <Right />
        </div>
      </div>
    </div>
  );
}
