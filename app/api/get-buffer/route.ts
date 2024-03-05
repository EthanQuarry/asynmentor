export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        const data = Buffer.from(buffer);

        return new Response(JSON.stringify({
            buffer: data
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return new Response(JSON.stringify({ error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}