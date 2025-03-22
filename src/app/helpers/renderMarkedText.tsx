export const renderMarkedText = (text: string, marks: any[] = []) => {
  return marks.reduce((acc: React.ReactNode, mark: any) => {
    switch (mark.type) {
      case "bold":
        return <strong>{acc}</strong>;
      case "italic":
        return <em>{acc}</em>;
      case "underline":
        return <u>{acc}</u>;
      case "code":
        return <code>{acc}</code>;
      default:
        return acc;
    }
  }, text);
};