import Form from "next/form";
import {test} from "../actions/action";
export default function Page () {
    return (
      <>
      <Form action="/search" className="mt-14 flex flex-col items-center space-y-4">
        <input name="query" className="border border-gray-500"/>
        <button type="submit" className=" border border-gray-500">Submit</button>
      </Form>

      <form action={test}>
      <input name="query" className="border border-gray-500"/>
      <button type="submit" className=" border border-gray-500">Submit</button>
      </form>
      </>
    );
}