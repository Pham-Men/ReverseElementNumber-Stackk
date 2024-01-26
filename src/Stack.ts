class Stack <T> {
    private container: number[] = [];
    private limit: number;

    constructor(limit: number) {
        this.limit = limit;
        this.container = [];
    }

    isEmpty(): boolean {
        return this.container.length === 0;
    }

    isFull (): boolean {
        return this.container.length === this.limit;
    }

    push(value: number): void {
        if (this.isFull()) {
            throw new Error("Stack is full")
        }
        this.container.push(value);
    }

    pop(): number {
        if(this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.container.pop();
    }
}

function ReverseElementNumber (arr: number[]): number[] {
    const stack: Stack <number> = new Stack(50);
    const reverseNumber: number[] = [];

    for(const num of arr) {
        if(!stack.isFull()) {
            stack.push(num);
        }
    }

    while (!stack.isEmpty()) {
        reverseNumber.push(stack.pop());
    }

    return reverseNumber;
}

export {Stack, ReverseElementNumber};