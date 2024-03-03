 export async function GET() {
    return new Response(JSON.stringify({
      text: `Given a general quadratic equation of the form
      $$ax^{2} + bx + c = 0$$
      with $x$ representing an unknown, with $a$, $b$ and $c$ representing constants, and with $a \\ne 0$, the quadratic formula is:
      $$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$`,

    }), {
      status: 200
    })
 }