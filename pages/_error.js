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

Error.getInitialProps = ({ res, req, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    newEvent('clientError', {
        statusCode: String(statusCode),
        path: req.url,
        error: err.message
    })

    return { statusCode }
}

export default Error