
function sub(data,color_value){
	//������С
	var svg = d3.select("#id1")
		.selectAll('*')
		.remove();
	var width = 700;
	var height = 700;

	//�� body �����һ�� SVG ����	
	var svg = d3.select("#id1")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	//�����ܱߵĿհ�
	var padding = {left:60, right:60, top:40, bottom:40};

	//����һ������
	cont = document.getElementById("data").value;
	var dataset = new Array();
	dataset = cont.split(",");
	//alert(Math.max.apply(null, dataset));
	//var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
	color_value = "#" + document.getElementById("color_value").value;
	//alert(color_value);
		
	//x��ı�����
	var xScale = d3.scale.ordinal()
		.domain(d3.range(dataset.length))
		.rangeRoundBands([0, width - padding.left - padding.right]);

	//y��ı�����
	var yScale = d3.scale.linear()
		.domain([0,Math.max.apply(null, dataset)])
		.range([height - padding.top - padding.bottom, 0]);

	//����x��
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");
		
	//����y��
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");

	//����֮��Ŀհ�
	var rectPadding = 4;

	//��Ӿ���Ԫ��
	var rects = svg.selectAll(".MyRect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class","MyRect")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(i) + rectPadding/2;
		} )
		.attr("width", xScale.rangeBand() - rectPadding )
		.attr("y",function(d){
			var min = yScale.domain()[0];
			return yScale(min);
		})
		.attr("height", function(d){
			return 0;
		})
		.attr("fill",color_value)  
		.transition()
		.delay(function(d,i){
			return i * 200;
		})
		.duration(2000)
		.ease("bounce")
		.attr("y",function(d){
			return yScale(d);
		})
		.attr("height", function(d){
			return height - padding.top - padding.bottom - yScale(d);
		});

	//�������Ԫ��
	var texts = svg.selectAll(".MyText")
		.data(dataset)
		.enter()
		.append("text")
		.attr("class","MyText")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(i) + rectPadding/2;
		} )
		.attr("dx",function(){
			return (xScale.rangeBand() - rectPadding)/2;
		})
		.attr("dy",function(d){
			return 20;
		})
		.text(function(d){
			return d;
		})
		.attr("y",function(d){
			var min = yScale.domain()[0];
			return yScale(min);
		})
		.transition()
		.delay(function(d,i){
			return i * 200;
		})
		.duration(2000)
		.ease("bounce")
		.attr("y",function(d){
			return yScale(d);
		});


	//���x��
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
		.call(xAxis); 
		
	//���y��
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.call(yAxis);
}
