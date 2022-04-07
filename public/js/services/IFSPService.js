angular.module('ifsp').factory('Contato', 'Curso', function($resource) {
    return $resource('/contatos/:id');
    return $resource('/cursos/:id');
});
