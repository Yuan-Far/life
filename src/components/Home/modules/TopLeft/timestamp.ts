enum Months {
    January, February, March, April, May, June, July, August, September, October, November, December
}

enum Weeks {
    MON, TUE, WED, THU, FRI, SAT, SUN
}

enum TimeLines {
    Morning = <any> 'A',
    Noon = <any> 'B',
    AfterNoon = <any> 'C',
    Evening = <any> 'D',
    Night = <any> 'E'
}
export class Format {
    ts = new Date();

    getTimeLine(h: number): string {
        if (h >= 5 && h <= 9) {
            return 'A';
        } else if (h >= 10 && h <= 12) {
            return 'B';
        } else if (h >= 13 && h <= 16 ) {
            return 'C';
        } else if (h >= 17 && h <= 19) {
            return 'D';
        } else if (h >= 20 || h <= 4) {
            return 'E';
        } else {
            return 'O';
        }
    }
    getFormattedDate() {
        return {
            'year': this.ts.getFullYear(),
            'month': Months[this.ts.getMonth()],
            'week': Weeks[this.ts.getDay()],
            'day': this.ts.getDate(),
            'timeLine': TimeLines[this.getTimeLine(this.ts.getHours())]
        };
    }
}
