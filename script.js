document.getElementById('addNode').addEventListener('click', function() {
    const mindmap = document.getElementById('mindmap');
    const node = document.createElement('div');
    node.classList.add('node');
    node.style.left = `${Math.random() * 500}px`;
    node.style.top = `${Math.random() * 300}px`;
    node.textContent = 'New Node';
    mindmap.appendChild(node);

    // Enable dragging of nodes
    node.addEventListener('mousedown', function(e) {
        const shiftX = e.clientX - node.getBoundingClientRect().left;
        const shiftY = e.clientY - node.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            node.style.left = pageX - shiftX + 'px';
            node.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        node.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            node.onmouseup = null;
        };
    });

    node.ondragstart = function() {
        return false;
    };
});
