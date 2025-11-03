// Validaciones y manipulación del DOM para el registro
(() => {
  const $ = (sel) => document.querySelector(sel);
  const form = $('#form-registro');
  const nombre = $('#nombre');
  const usuario = $('#usuario');
  const email = $('#email');
  const pass1 = $('#password');
  const pass2 = $('#password2');
  const nacimiento = $('#nacimiento');
  const previewUsuario = $('#preview-usuario');
  const btnLimpiar = $('#btn-limpiar');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/; // 6-18, 1 mayúscula, 1 número

  // Vista previa dinámica del usuario (manipulación del DOM)
  usuario.addEventListener('input', () => {
    const v = usuario.value.trim();
    previewUsuario.textContent = v ? `Tu usuario será: @${v}` : '';
  });

  function setValidity(input, valid, msg = '') {
    if (valid) {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      if (msg) {
        let fb = input.parentElement.querySelector('.invalid-feedback');
        if (fb) fb.textContent = msg;
      }
    }
  }

  function edadDesde(fechaStr) {
    const hoy = new Date();
    const f = new Date(fechaStr);
    let edad = hoy.getFullYear() - f.getFullYear();
    const m = hoy.getMonth() - f.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < f.getDate())) edad--;
    return edad;
  }

  function validarCampos() {
    let ok = true;

    // nombre
    const vNom = nombre.value.trim().length > 0;
    setValidity(nombre, vNom, 'Ingresa tu nombre completo.');
    ok = ok && vNom;

    // usuario
    const vUsr = usuario.value.trim().length > 0;
    setValidity(usuario, vUsr, 'Ingresa un nombre de usuario.');
    ok = ok && vUsr;

    // email
    const vMail = emailRegex.test(email.value.trim());
    setValidity(email, vMail, 'Ingresa un correo válido (ej: nombre@dominio.com).');
    ok = ok && vMail;

    // contraseñas
    const vPass = passRegex.test(pass1.value);
    setValidity(pass1, vPass, '6–18 caracteres, con al menos 1 mayúscula y 1 número.');
    ok = ok && vPass;

    const vMatch = pass1.value === pass2.value && pass2.value.length > 0;
    setValidity(pass2, vMatch, 'Las contraseñas no coinciden.');
    ok = ok && vMatch;

    // edad mínima 13
    const vNac = nacimiento.value !== '' && edadDesde(nacimiento.value) >= 13;
    setValidity(nacimiento, vNac, 'Debes ser mayor o igual a 13 años.');
    ok = ok && vNac;

    return ok;
  }

  // Validación en tiempo real
  [nombre, usuario, email, pass1, pass2, nacimiento].forEach(el => {
    el.addEventListener('input', validarCampos);
    el.addEventListener('blur', validarCampos);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarCampos()) {
      // Simular envío
      alert('Formulario enviado correctamente.');
      form.reset();
      // limpiar estados visuales
      [nombre, usuario, email, pass1, pass2, nacimiento].forEach(el => {
        el.classList.remove('is-valid', 'is-invalid');
      });
      previewUsuario.textContent = '';
    } else {
      // Forzar mostrar feedback de Bootstrap
      form.classList.add('was-validated');
    }
  });

  // Botón limpiar
  btnLimpiar.addEventListener('click', () => {
    [nombre, usuario, email, pass1, pass2, nacimiento].forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    previewUsuario.textContent = '';
  });
})();
