import React from "react";

const Loading = () => {
  const [loadingText, setLoadingText] = React.useState("Fetching Events");

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setLoadingText((loadingText) =>
        loadingText === "Fetching Events..."
          ? "Fetching Events"
          : loadingText + "."
      );
    }, 300);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div style={{ marginTop: "10rem" }}>
      <h3 style={{ fontWeight: "300", fontSize: "4rem" }}>{loadingText}</h3>
    </div>
  );
};

export default Loading;
