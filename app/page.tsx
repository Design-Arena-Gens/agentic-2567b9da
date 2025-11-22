import Hero from "@/components/Hero";
import ConceptGrid from "@/components/ConceptGrid";
import DualityExplorer from "@/components/DualityExplorer";
import Timeline from "@/components/Timeline";
import QuoteBanner from "@/components/QuoteBanner";
import FAQ from "@/components/FAQ";
import SectionTitle from "@/components/SectionTitle";
import ExperimentCards from "@/components/ExperimentCards";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-28 pb-24">
      <Hero />

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="المفهوم الأساسي"
            title="لماذا نحتاج إلى ازدواجية الموجة والجسيم؟"
            description="التمييز بين الموجة والجسيم كان واضحاً في الفيزياء الكلاسيكية، لكن عند دراسة الجسيمات الدقيقة ظهرت ظواهر لا يمكن تفسيرها إلا بقبول أن المادة يمكن أن تمتلك خصائص كلتا الحالتين. هذا الفهم لبنة أساسية في صياغة ميكانيكا الكم الحديثة."
          />
          <div className="mt-12">
            <ConceptGrid />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <DualityExplorer />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="التجارب المحورية"
            title="محطات غيرت نظرتنا للسلوك الموجي"
            description="تسلسل التجارب الكبرى، من يونغ إلى التجارب الحديثة على الجزيئات الضخمة، رسّخ فكرة الازدواجية وقدم أدلة متراكمة على أن الطبيعة أكثر غرابة مما تخيلناه."
            align="center"
          />
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="دراسات تطبيقية"
            title="كيف اختبرت الفيزياء الكمّية ازدواجية الموجة والجسيم؟"
            description="من خلال تجارب مبتكرة، تمكّن العلماء من كشف الوجهين المتلازمين للإلكترونات والفوتونات، ما فتح الطريق للتقنيات الكمية الحديثة."
          />
          <div className="mt-12">
            <ExperimentCards />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <QuoteBanner />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            eyebrow="أسئلة شائعة"
            title="تساؤلات حول الازدواجية"
            description="توضح هذه الأسئلة الشائعة حدود فهمنا الحالي، وتبرز كيف ما زالت الازدواجية تلهم الأبحاث الكمية المعاصرة."
          />
          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
