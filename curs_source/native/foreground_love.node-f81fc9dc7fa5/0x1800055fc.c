
/* Address: 0x1800055fc; Evidence: ev_50b9d5db213cbc6fa46ff201010de7af6e8db7bf82b795f98a4dd7a58d0aa694 */

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

