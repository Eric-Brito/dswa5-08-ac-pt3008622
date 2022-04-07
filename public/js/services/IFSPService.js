angular.module('ifsp').factory('Contato', 'Curso', function($resource) {
    return $resource('/contatos/:id');
});

angular.module('ifsp').factory('Curso', function($resource) {
    return $resource('/cursos/:id');
});
