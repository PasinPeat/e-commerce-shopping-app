import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <p>Sorry, something went wrong</p>
      <div className="text-foreground">
        <Link href={"/"}>
          {" "}
          <button className=" bg-blue-600">Back to home page</button>
        </Link>
      </div>
    </>
  );
}
