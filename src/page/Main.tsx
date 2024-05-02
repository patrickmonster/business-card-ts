import Editor from "@monaco-editor/react";

export default () => {
  return (
    <Editor
      height="90vh"
      width="90vw"
      defaultLanguage="html"
      defaultValue="// let's write some broken code 😈"
      onValidate={(markers) => {
        // model markers
        markers.forEach((marker) => console.log("onValidate:", marker.message));
      }}
    />
  );
};
