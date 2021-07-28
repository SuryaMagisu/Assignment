
function add()
	{	
		const inp_val={
		old_val: document.getElementById("input_box").value,
		};
		Object.defineProperty(inp_val, "new_val", {value:(parseInt(inp_val.old_val) +1)});
		document.getElementById("input_box").value=inp_val.new_val;
	}
function sub()
	{
		const inp_val={
		old_val: document.getElementById("input_box").value,
		};
		Object.defineProperty(inp_val, "new_val", {value:(parseInt(inp_val.old_val) - 1)});
		document.getElementById("input_box").value=inp_val.new_val;
	}
function inc()
	{
		const inp_val={
		old_val: document.getElementById("input_box").value,
		};
		Object.defineProperty(inp_val, "new_val", {value:(parseInt(inp_val.old_val) + 10)});
		document.getElementById("input_box").value=inp_val.new_val;	
	}
function dec()
	{	
		const inp_val={
		old_val: document.getElementById("input_box").value,
		};
		Object.defineProperty(inp_val, "new_val", {value:(parseInt(inp_val.old_val) - 10)});
		document.getElementById("input_box").value=inp_val.new_val;
	}
