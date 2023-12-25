import { ProviderWrapper as OpinionProviderWrapper } from "../../contexts/VotesContext"
import App from "./App"

const AppLoader = () => {
    return (
        <OpinionProviderWrapper>
            <App/>
        </OpinionProviderWrapper>
    )
}
export default AppLoader