
/* Address: 0x1800054dc; Evidence: ev_2e35f870e890fdf9f40e439d4ccb17a5ec0c07786c2ae35adb5e578db8f86d38 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001a2c0) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

