
/* Address: 0x1800057a8; Evidence: ev_763d0b95574ada7d3ad45c1879c7a5f572fef2f0a215c694b74bbe72111d8511 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001b2c0) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

