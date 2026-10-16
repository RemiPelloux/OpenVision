
/* Address: 0x18000cf74; Evidence: ev_016e4e11a9b19892da8e30f77a568267f0834823e369a8f3470e7340383cb594 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_180024430) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

