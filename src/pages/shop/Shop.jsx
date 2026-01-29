import { ProductCard } from "../../components/cards/ProductCard";
import { Container, Section } from "../../layout";
import Layout from "../../layout/Layout";
import { PRODUCTS } from "../../shared/products";

export default function Shop() {
  return (
    <Layout>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PRODUCTS.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
