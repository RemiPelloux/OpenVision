# Local Jupyter notebook support

Updated 25 October 2026. **OV-NB1 is implemented as a post-baseline product
expansion and remains outside the 44-story acceptance denominator.** The
implementation is local-only: OpenVision starts one Jupyter kernel per open
notebook, keeps its Python state across cells, and releases it when the notebook
closes or the user shuts it down.

## Delivered behavior

- Kernels are discovered from the configured Python executable through
  `jupyter_client.KernelSpecManager`.
- Python cells execute through the real local kernelspec. Stream, display,
  result and error messages are mapped to notebook outputs.
- Interrupt sends a kernel interrupt first. If the kernel does not settle within
  two seconds, OpenVision terminates the owned process tree and rejects the
  cell. Windows uses `taskkill /T /F`; POSIX hosts use `SIGKILL`.
- Retained output is bounded to 2,000,000 bytes per cell by default, with a
  user setting bounded to 10,000,000 bytes.
- Notebook close, restart and shutdown dispose the owned kernel. No hosted
  execution, telemetry, marketplace lookup or account flow is involved.
- The extension is copied into every source build at
  `source/app/extensions/openvision-jupyter/` and its Python bridge is copied
  into the portable `electron-host/desktop/` support directory.

## Commands and settings

The controller is registered for `jupyter-notebook` and exposes:

- `OpenVision: Jupyter: Select Local Kernel`
- `OpenVision: Jupyter: Restart Local Kernel`
- `OpenVision: Jupyter: Shut Down Local Kernel`

Settings are `openvision.jupyter.pythonPath`,
`openvision.jupyter.kernelName` (default `python3`) and
`openvision.jupyter.maxOutputBytes` (default `2000000`). A trusted workspace is
required before a cell can execute.

## Evidence

The real local verification uses Python 3.14.6, `jupyter_client 8.10.0` and
`ipykernel 7.4.0` on Windows x64:

| Check | Result |
| --- | --- |
| Kernel discovery | pass |
| Persistent variable and rich result/error outputs | pass |
| Cancellation and owned-kernel release | pass (4.2 s) |
| Extension manifest and bounded-output contract | pass |
| Desktop build with the extension installed | pass (`build:desktop`) |
| Windows portable package | pass (`package:windows`) |

These checks prove the local controller and bridge behavior. They do not claim
Jupyter support for a Python environment that is not installed on the machine,
or notebook parity with hosted account/cloud features.

## Try the example

Open [examples/jupyter/openvision-local.ipynb](../../examples/jupyter/openvision-local.ipynb)
in OpenVision, choose **OpenVision Jupyter (local Python)** as the notebook
controller, and use **Select Local Kernel** if `python3` is not the desired
kernelspec. Install `jupyter_client` and `ipykernel` in the selected Python
environment before running cells.
