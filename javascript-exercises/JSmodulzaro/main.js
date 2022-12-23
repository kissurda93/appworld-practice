const textarea = document.querySelectorAll('textarea');

textarea.forEach(item => {
    CodeMirror.fromTextArea(item, {
        lineNumbers: false,
        mode: 'javascript',
        theme: 'lucario'
    });
})

