export function conflict(message) {
    return {
        type: "conflict",
        message
    }
}

export function notFound(message) {
    return {
        type: "notFound",
        message
    }
}

export function unprocessableEntity(message) {
    return {
        type: "unprocessable",
        message
    }
}