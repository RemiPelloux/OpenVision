
/* Address: 0x18000b904; Evidence: ev_c2e1a852f90757d7753114e992eab37ef503027b2217a74a681d66386f9eebb1 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180022430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

