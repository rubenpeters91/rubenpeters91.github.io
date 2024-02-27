async function evaluatePython() {
    const output = document.getElementById("output");
    const code = document.getElementById("code");

    let pyodide = await loadPyodide();
    try {
        let code_result = pyodide.runPython(code.value);
        output.value = code_result;
    } catch (err) {
        output.value = err.message;
    }
}
