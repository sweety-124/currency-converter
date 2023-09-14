import{render,screen} from '@testing-library/react'
import HomePage from '@/app/page'
import { describe } from 'node:test'

describe('HomePage',()=>{
    it("should have docs text",()=>{
        render(<HomePage/>)
        const myEleme = screen.getByText('Conversion')
        //@ts-ignore
        expect(myEleme).toBeInTheDocument()
    })
})