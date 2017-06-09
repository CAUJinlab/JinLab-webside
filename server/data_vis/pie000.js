function pie(data_1){

		var svg = d3.select("#id2")
				.select("svg")
				.remove();
		
		var pie = d3.layout.pie();

		cont = document.getElementById("data_1").value;
		dataset2 = cont.split(",");

		cont2 = document.getElementById("data_2").value;
		dataset1 = cont2.split(",");
 		
        font_pie = document.getElementById("font_pie").value;
        font_pie = font_pie + "px";

		if (dataset1.length!=dataset2.length){
			alert("The number of labels is not equal to the number of data !");
			return cont
		}
		//var width = 600;  
      //  var height = 600; 
	   	width = document.getElementById("width_pie").value;
	 	width = Number(width);

		height = document.getElementById("height_pie").value;
		height = Number(height);

		rect_width = document.getElementById("rect_width_pie").value;
	 	rect_width = Number(rect_width);
          
        radius = document.getElementById("radius_pie").value;
		radius = Number(radius);

		var dataset = new Array();
        //var dataset=[["��ǩ1",30],["��ǩ2",20],["��ǩ3",43],["��ǩ4",55],["��ǩ5",13]];  
		for (var i=0;i<dataset1.length;i++){
			dataset.push([dataset1[i],dataset2[i]]);
		}
		//alert(dataset);

        var outerRadius = radius; //��뾶  
            var innerRadius = 0; //�ڰ뾶��Ϊ0���м�û�пհ�  
        var arc = d3.svg.arc() //��������  
                .innerRadius(innerRadius) //�����ڰ뾶  
                .outerRadius(outerRadius); //������뾶  
        var color = d3.scale.category20();//����20����ɫ�����������ߣ�����ֵ�������ַ���������  
        var pie = d3.layout.pie()   //��ͼ����  
            .sort(null)             //�����򣬲�д���Ӵ�С��˳ʱ������  
			.value(function(d){  return d[1]});   //����valueֵΪ�����2��ά�����е�����  
        var piedata=pie(dataset);  
        var svg = d3.select("#id2")
					.append("svg")
					.attr("width", width)
					.attr("height", height);
  
         var arcs=svg.selectAll(".arc")               
            .data(piedata) //������pie(data0)  
            .enter().append("g")  
            .attr("class", "arc")  
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")   //��Բ��ƽ�Ƶ�svg������  
            .append("path")  
            .attr("fill", function(d, i) {  
                return color(i);            //�����±������ɫ  
            })  
            .attr("d", function(d, i) {  
                return arc(d);              ///��������Ļ�������  
            });  
  
         var text=svg.selectAll(".text")  
            .data(piedata) //������pie(data0)  
            .enter().append("g")  
            .attr("class", "text")  
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")  
            .append("text")  
            .style('text-anchor', function(d, i) {  
                //��������������߻����ұߣ����ұ�������start������Ĭ�϶���start��  
                return (d.startAngle + d.endAngle)/2 < Math.PI ? 'start' : 'end';  
            })  
            .attr('transform', function(d, i) {  
                var pos = arc.centroid(d);      //centroid(d)���㻡����  
                pos[0]=outerRadius*((d.startAngle+d.endAngle)/2<Math.PI?1.4:-1.4)  
                pos[1]*=2.1;                    //�������ƶ�������ȥ��  
                return 'translate(' + pos + ')';  
            })  
            .attr("dy",".3em")              //���������±���.3em  
            .text(function(d) {             //�����ı�  
                return d.data[0];     
            })  
  
         var text2=svg.selectAll(".text2")  
            .data(piedata) //������pie(data0)  
            .enter().append("g")  
            .attr("class", "text")  
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")  
            .append("text")  
            .style('text-anchor',"middle")  
            .attr('transform', function(d, i) {  
                var pos = arc.centroid(d);          //�����ַ���Բ������  
                return 'translate(' + pos + ')';  
            })  
            .text(function(d) {  
                return d.data[1];  
            })  
             var line = svg.selectAll(".line")      //������ֺͻ�֮�������  
                .data(piedata) //������pie(data0)  
                .enter().append("g")  
                .attr("class", "line")  
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")  
                .append("polyline")  
                .attr('points', function(d, i) {  
                    var pos1= arc.centroid(d),pos2= arc.centroid(d),pos3= arc.centroid(d);  
                    pos1[0]*=2,pos1[1]*=2;  
                    pos2[0]*=2.1,pos2[1]*=2.1  
                    pos3[0]=outerRadius*((d.startAngle+d.endAngle)/2<Math.PI?1.4:-1.4)  
                    pos3[1]*=2.1;  
                    //pos1��ʾԲ�������ı�Եλ�ã�pos2��������΢ȥ��һ�£�pos3���ǽ�pos2ƽ�ƺ�õ���λ��  
                    //����������һ��ͳ����߶Ρ�  
                    return [pos1,pos2,pos3];  
                })  
                .style('fill', 'none')  
                .style('stroke',function(d,i){  
                    return color(i);  
                })  
                .style('stroke-width', "3px")  
                .style('stroke-dasharray',"5px")  
  
             var label=svg.selectAll('.label')      //������Ͻǵı�ǩ  
                    .data(piedata)  
                    .enter()  
                    .append('g')  
                    .attr("transform","translate("+(width-rect_width)+","+10+")")  
                    ;     
                label.append('rect')        //��ǩ�еľ���  
                    .style('fill',function(d,i){  
                        return color(i);  
                    })  
                    .attr('x',function(d,i){  
                        return 0;  
                    })  
                    .attr("y",function(d,i){  
                        return 10+i*10+i*0.4*rect_width;  
                    })  
                    .attr('rx','5')     //rx=ry �����Բ��  
                    .attr('ry','5')  
                    .attr('width',rect_width)  
                    .attr('height',0.4*rect_width)  
                    ;  
                label.append('text')            //��ǩ�е�����  
                    .attr('x',function(d,i){  
                        return rect_width / 2;              //��Ϊrect�����50�����԰�����ƫ��25,�ں����ٽ��������þ���  
                    })  
                    .attr("y",function(d,i){          
                        return 15+0.2*rect_width+i*10+i*0.4*rect_width;  
                    })  
                    .text(function(d){  
                        return d.data[0];  
                    })  
                    .style({  
                        "font-size":font_pie,  
                        "text-anchor":"middle",  
                        'fill':"white",  
                        "font-weight":600  
                    })
                    return svg;
} 
function sort_pie(pie){
	pie.sort();
}