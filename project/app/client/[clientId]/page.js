export default async function ClientId({ params }) {
  const { clientId } = await params;
  return (
    <div
    // style={{
    //     background: "#4f8a66ff",
    //     minHeight: "100vh",
    //     color: "#753109ff",
    //   }}
    >
        <h1>ClientId сторінка</h1>
        {/* <p>{params.clientId}</p> */}
        <p>{clientId}</p>
    </div>
  );
}