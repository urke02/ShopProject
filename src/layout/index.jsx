const Section = ({ children }) => {
  return <section className="py-10">{children}</section>;
};

const Container = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export { Section, Container };
