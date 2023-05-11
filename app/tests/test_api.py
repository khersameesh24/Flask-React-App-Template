import json
from app.api.server import app


class TestFlaskServer:
    """
    Test class for flask server
    """
    test_client = app.test_client()

    def test_flaskapp_valid_request(self) -> None:
        """
        Test to check if a get request is successful to the `test-route`
        """
        with self.test_client as client:
            response = client.get("/test-route")
            # assert for 200 status code (successful request)
            assert response.status_code == 200

    def test_flaskapp_valid_response(self) -> None:
        """
        Test to check for the correct response from the `test-route`
        """
        with self.test_client as client:
            response = client.get("/test-route")
            response_obj = json.loads(response.data)
            assert response_obj['context'] == 'Test message!'
