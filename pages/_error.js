import { newEvent } from "@/actions/newEvent"

function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    newEvent('clientError', {
        statusCode: String(statusCode),
        path: err.page,
        error: err.message
    })
    return { statusCode }
}

export default Error