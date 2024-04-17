import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../MockData/resCardMock.json"
import "@testing-library/jest-dom"
it("should render RestaurantCard with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText('Hive Honey Cake')
    expect(name).toBeInTheDocument()
})