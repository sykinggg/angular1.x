import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

    @Input() outsideData: any;
    d3Container: string;

    constructor() { }

    ngOnInit() {
        this.d3Container = 'd3Container' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.loadComponent(this.outsideData);
        }, 1000);
    }

    loadComponent(data) {
        let width = 960,
            height = 500;

        let svg = d3.select("." + this.d3Container).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        let gradient = svg.append("defs").append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "20%")
            .attr("x2", "20%")
            .attr("y2", "100%");

        gradient.append("stop")
            .attr("offset", "20%")
            .attr("stop-color", "#ccf");

        gradient.append("stop")
            .attr("offset", "50%")
            .attr("stop-color", "#1C425C");

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#19162B");

        // could use transparent gradient overlay to vary raindrop color
        svg.selectAll("path")
            .data(d3.range(358))
            .enter().append("path")
            .attr("fill", "url(#gradient)")
            .attr("d", function () { return raindrop(10 + Math.random() * 200); })
            .attr("transform", function (d) {
                return "rotate(" + d + ")"
                    + "translate(" + (height / 4 + Math.random() * height / 6) + ",0)"
                    + "rotate(90)";
            });

        // size is linearly proportional to square pixels (not exact, yet)
        function raindrop(size) {
            let r = Math.sqrt(size / Math.PI);
            return "M" + r + ",0"
                + "A" + r + "," + r + " 0 1,1 " + -r + ",0"
                + "C" + -r + "," + -r + " 0," + -r + " 0," + -3 * r
                + "C0," + -r + " " + r + "," + -r + " " + r + ",0"
                + "Z";
        }
    }

}
