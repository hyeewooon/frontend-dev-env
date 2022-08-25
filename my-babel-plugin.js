module.exports = function myBabelPlugin() {
  return {
    visitor: {
      //   Identifier(path) {
      //     const name = path.node.name;

      //     console.log(name);

      //     path.node.name = name.split("").reverse().join("");
      //   },
      // 변수 선언시 const => var로 키워드 변경
      VariableDeclaration(path) {
        // console.log(path.node.kind);

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
