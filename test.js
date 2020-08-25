var Foo = function (a) {
    //a 
    // this -Foo
    function bar() {
        return a;
    }
    this.baz = function () {
        return a;
    };
};

Foo.prototype = {
    biz: function () {
        return a;
    }
};

var f = new Foo(7);
f.bar();  // private 
f.baz(); // 7
f.biz(); // error


/**
 * API Docs
 * ---------
 * /posts?page=0 => [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, {id: 3, title: 'Post 3'}, N...]
 * /posts?page=1 => [{id: 4, title: 'Post 4'}, {id: 5, title: 'Post 5'}, {id: 6, title: 'Post 6'}, N...]
 * /posts?page=N => [N...]
 */

// HTML
// ---------
<ul id="posts"></ul>

window.addEventListener('scroll', scrollHandler);

function scrollHandler() { 
    // true
    // we have more data
    // setTimeout
    
}

function hasReachedBottom() { 
    // return true / false;
};

function loadMore() {
    let posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }, { id: 3, title: 'Post 3' }]; /// 10
    let newPost = []; //20
    fetch('url')
        .then(response => json.response)
        .then(newPost = [...newPost, ...posts])
        .then(this.renderData(newPost));
}

function renderData(allPosts) {
    let currentPage = 1;
    let totalItems = 20;
    let currentPost = document.querySelectorAll("#posts li").length;
    let ul = document.querySelector('#posts');
    let lis = '';
    // const fragment = document.createDocumentFragment();
    for (let i = currentPost; i < totalItem.length; i++) {
        // lis = '<li><h3>' + title + '</h3></li>';
        li[i] = document.createElement('li');
        li[i].textContent = title;

        // fragment.appendChild(li);
    }

    // fragment.innerHTML(li string);

    ul.appendChild(lis);
}