import { useState } from "react";

const Main = () => {
  const [url, setUrl] = useState<string>("");
  const [res, setRes] = useState<string>("");

  const handleSubmit = () => {
    if (url) {
      fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if ("error" in json) {
            setRes(json.error);
          } else {
            setRes(json.origin + json.short_url);
          }
        });
    }
  };

  return (
    <section className="main-section">
      <form>
        <label htmlFor="url">
          Enter <span>URL</span> link:
        </label>
        <div className="url-container">
          <input
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Slice URL
          </button>
        </div>
        <input readOnly value={res} />
        <label>
          Thank you for using <span>KIRUIT</span>!
        </label>
      </form>
    </section>
  );
};

export default Main;
