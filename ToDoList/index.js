function clear() {
    localStorage.clear();
    load();
}

function postaction() {
    var title = document.getElementById("title");
    if (title.value == "") {
        alert("内容不能为空");
    } else {
        var data = loadData();
        var todo = { "title": title.value, "done": false };
        data.push(todo);
        saveData(data);
        console.log(data)
        var form = document.getElementById("form");
        form.reset();
        load();
    }
}

function loadData() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
        return JSON.parse(collection);
    }
    else return [];
}

function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
}


function saveSort() {
    var todolist = document.getElementById("todolist");
    var donelist = document.getElementById("donelist");
    var ts = todolist.getElementsByTagName("p");
    var ds = donelist.getElementsByTagName("p");
    var data = [];
    for (i = 0; i < ts.length; i++) {
        var todo = { "title": ts[i].innerHTML, "done": false };
        // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
        data.unshift(todo);
    }
    for (i = 0; i < ds.length; i++) {
        var todo = { "title": ds[i].innerHTML, "done": true };
        data.unshift(todo);
    }
    saveData(data);
}

function remove(i) {
    var data = loadData();
    var todo = data.splice(i, 1)[0];
    saveData(data);
    load();
}

function update(i, field, value) {
    var data = loadData();
    var todo = data.splice(i, 1)[0];
    todo[field] = value;
    data.splice(i, 0, todo);
    saveData(data);
    load();
}

function edit(i) {
    load();
    var p = document.getElementById("p-" + i);
    console.log(p)
    title = p.innerHTML;
    p.innerHTML = "<input id='input-" + i + "' value='" + title + "' />";
    var input = document.getElementById("input-" + i);
    input.setSelectionRange(0, input.value.length);
    input.focus();
    input.onblur = function () {
        if (input.value.length == 0) {
            p.innerHTML = title;
            alert("内容不能为空");
        }
        else {
            update(i, "title", input.value);
        }
    };
}

function load() {
    var todolist = document.getElementById("todolist");
    // todolist.remove();
    todolist.innerHTML = ""
    console.log(todolist)
    var donelist = document.getElementById("donelist");
    // donelist.remove()
    donelist.innerHTML = ""
    console.log(donelist)
    var collection = localStorage.getItem("todo");
    if (collection != null) {
        var data = JSON.parse(collection);
        var todoCount = 0;
        var doneCount = 0;
        var todoString = "";
        var doneString = "";
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].done) {
                var li = document.createElement('li');
                li.draggable = true;
                var input = document.createElement('input');
                input.type = 'checkbox'
                // input.onchange = update(i, 'done', false)
                input.onchange = function () {
                    update(i, 'done', false)
                }

                var p = document.createElement('p');
                p.id = "p-" + i;
                p.onclick = function () {
                    console.log(2)
                    edit(i)
                }
                p.innerHTML = data[i].title

                var a = document.createElement('a');
                a.href = "javascript:remove(" + i + ")"
                a.innerHTML = "-"
                li.appendChild(input)
                li.appendChild(p)
                li.appendChild(a)
                donelist.appendChild(li)
                doneCount++;
            }
            else {

                var li = document.createElement('li');
                li.draggable = true;
                var input = document.createElement('input');
                input.type = 'checkbox'
                input.onchange = function () {
                    update(i, 'done', true)
                }

                var p = document.createElement('p');
                p.id = "p-" + i;
                p.onclick = function () {
                    console.log(i)
                    edit(i)
                }
                p.innerHTML = data[i].title

                var a = document.createElement('a');
                a.href = "javascript:remove(" + i + ")"
                a.innerHTML = "-"
                li.appendChild(input)
                li.appendChild(p)
                li.appendChild(a)
                todolist.appendChild(li)
                todoCount++;
            }
        };
        todocount.innerHTML = todoCount;
        donecount.innerHTML = doneCount;
    }
    else {
        todocount.innerHTML = 0;
        todolist.innerHTML = "";
        donecount.innerHTML = 0;
        donelist.innerHTML = "";
    }

    var lis = todolist.querySelectorAll('ol li');
    [].forEach.call(lis, function (li) {
        li.addEventListener('dragstart', handleDragStart, false);
        li.addEventListener('dragover', handleDragOver, false);
        li.addEventListener('drop', handleDrop, false);

        onmouseout = function () {
            saveSort();
        };
    });
}

window.onload = load;

window.addEventListener("storage", load, false);

var dragSrcEl = null;
function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}
function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}
