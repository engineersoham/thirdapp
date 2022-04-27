import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import PostTable from "../PostTable"

it('snap of table',()=>{
    const tree = render(
        <BrowserRouter>
        <PostTable data={()=>{}} setPage={()=>{}}/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
    expect(screen.getByTitle('table')).toBeInTheDocument()
})

describe('post table fetch', ()=>{
    jest.setTimeout(20000);
    it("fetch test",async()=>{
        render(
             <BrowserRouter>
            <PostTable data={[{created_at: "11", author:"aa"}]} 
            setPage={()=>{}}/>
            </BrowserRouter>
        );
        await new Promise((r)=>setTimeout(r, 5000));
        const post = screen.getByTestId("post-0")
        expect(post).toBeInTheDocument()
        const theClick = fireEvent.click(post);
        expect(theClick).toBeTruthy();
        fireEvent.scroll(window, {target:{scrollY:100}});
    })
})

