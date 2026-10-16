
/* Address: 0x18000b920; Evidence: ev_c35c0c62b424eb489c4810178cd7b99e19baea65a92599a3e7b41312cfec1167 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180022428) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

