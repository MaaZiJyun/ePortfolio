import Container from "./_components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">見つからないよ</h1>
        <p className="text-lg ">404 Page Not Found</p>
      </div>
    </Container>
  );
}
