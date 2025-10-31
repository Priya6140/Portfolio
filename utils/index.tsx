export const HighlightedText = ({ text }: { text: string }) => {
  const parseText = (text: string) => {
    return text.split(" ").map((word, index) => {
      if (word.startsWith("#")) {
        const cleanWord = word.slice(1); // Remove the `#` symbol
        return (
          <span key={index} style={{ color: "#1DA1F2", fontWeight: "bold" }}>
            {cleanWord}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return <div>{parseText(text)}</div>;
};
