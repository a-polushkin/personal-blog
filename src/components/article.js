import React from "react"

const Article = ({
  content: {
    title,
    text: { text },
    banner: {
      file: { url },
    },
    publishedAt,
    author: {
      avatar: { file },
      fullName,
    },
  },
}) => (
  <div>
    <h2>{title}</h2>
    <img src={url} alt={title} />
    <div>{text}</div>
    <h5>{publishedAt}</h5>
    <h5>
      {fullName}
      <div style={{}}>
        <img
          src={file.url}
          alt={fullName + "-photo"}
          style={{
            width: "60px",
            height: "60px",
            verticalAlign: "middle",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </h5>
  </div>
)

export default Article
