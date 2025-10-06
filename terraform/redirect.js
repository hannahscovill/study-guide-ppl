function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } 
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    if (uri === '/bookClub') {
        const response = {
            statusCode: 302, // Use 301 for permanent redirect, 302 for temporary
            statusDescription: 'Moved Unassertively',
            headers: {
                'location': { 'value': '/docs/phak/intro' }
            }
        };
        return response;
    }

    return request;
}