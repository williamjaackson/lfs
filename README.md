# Local Freight Services
A flask website for the mock company LFS. This is one of my school projects.

## Installation & Setup
### Requirements
 - You need [Python 3.7+](http://python.org/downloads) to be able to run this service.
 - You also need [Git](https://git-scm.com/downloads) installed locally to download the project.

### Setup Guide
1. Clone the Github repository.
    ```sh
    git clone https://github.com/itskegnh/lfs local-lfs
    ```

1. Navigate to the project directory.
    ```sh
    cd /path/to/local-lfs
    ```

1. Install all the necessary requirements.
    ```sh
    python -m pip install -r requirements.txt
    ```

1. Host a local version of the site with gunicorn.
    ```sh
    gunicorn main:app -b 127.0.0.1:8000
    ```
    > **NOTE:** The site must be run on port `8000` for the site to function. Please make sure this port is free prior to running the application.

1. Navigate to `127.0.0.1:8000` in a web browser of your choice to see it in action.