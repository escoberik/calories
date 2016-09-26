(function() {
  angular.module('account').
    controller('UsersFormController', [
      '$scope', '$uibModalInstance', 'API', 'user',
    function($scope, $uibModalInstance, API, user) {

      $scope.user = angular.copy(user) || {};

      $scope.submit = function() {
        var promise,
            params = { user: $scope.user };

        if ($scope.user.id) {
          promise = API.put('users', $scope.user.id, params);
        } else {
          promise = API.post('users', params);
        }

        promise.then(function(response) {
          $uibModalInstance.close(response.data);
        });
      };

      $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };
    }]);
})();
