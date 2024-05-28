const Overview = ({ overview }) => {
  return (
    <section>
      <div className="container py-8">
        <h2 className="my-4 text-xl font-bold">Overview</h2>
        <p className="leading-8 text-gray-600 whitespace-pre-wrap">
          {overview}
        </p>
      </div>
    </section>
  );
};

export default Overview;
